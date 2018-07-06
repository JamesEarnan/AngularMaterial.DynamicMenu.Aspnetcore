using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularMaterial.DynamicMenu.Model
{
    public class Menu
    {
        public int MenuId { get; set; }
        public string DisplayName { get; set; }
        public string Route { get; set; }
        public int? MainMenuId { get; set; }
        public virtual Menu MainMenu { get; set; }
        public virtual ICollection<Menu> ChildMenus { get; set; }
    }
}
