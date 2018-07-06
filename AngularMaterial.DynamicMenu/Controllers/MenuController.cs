using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularMaterial.DynamicMenu.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace AngularMaterial.DynamicMenu.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var options = new DbContextOptionsBuilder<MenuDbContext>()
                .UseInMemoryDatabase(databaseName: "Add_writes_to_database")
                .Options;

            MenuDbContext menuDbContext = new MenuDbContext(options);

            if (!menuDbContext.Menus.Any())
            {
                menuDbContext.Menus.Add(new Menu()
                {
                    DisplayName = "First Menu",
                    ChildMenus = new List<Menu>()
                {
                    new Menu(){ DisplayName = "First Content", Route = "FirstContent" },
                    new Menu(){ DisplayName = "Second Content", Route = "SecondContent" },
                    new Menu(){
                        DisplayName = "Second Menu",
                        ChildMenus = new List<Menu>()
                        {
                            new Menu(){ DisplayName = "Third Menu",
                                    ChildMenus = new List<Menu>()
                                    {
                                          new Menu(){ DisplayName = "7th Content", Route = "SeventhContent" },
                                    }
                              },
                              new Menu(){ DisplayName = "Third Content", Route = "ThirdContent" },      
                        },
                    },
                }
                });

                menuDbContext.Menus.Add(new Menu() { DisplayName = "Forth Content", Route = "ForthContent" });

                menuDbContext.Menus.Add(new Menu()
                {
                    DisplayName = "Forth Menu",
                    ChildMenus = new List<Menu>()
                    {
                    new Menu(){ DisplayName = "Fifth Content", Route = "FifthContent" },
                    new Menu(){ DisplayName = "Sixth Content", Route = "SixthContent" },
                    }
                });

                menuDbContext.SaveChanges();
            }

            var menus = menuDbContext.Menus.Where(x => !x.MainMenuId.HasValue).ToList();
            var allMenus = menuDbContext.Menus.ToList();
            return Ok(menus);

        }

      
    }
}