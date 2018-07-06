using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularMaterial.DynamicMenu.Model
{
    public class MenuDbContext : DbContext
    {
        public MenuDbContext() { }
        public MenuDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Menu> Menus { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Menu>().HasKey(x => x.MenuId);
            modelBuilder.Entity<Menu>().HasOne(x => x.MainMenu).WithMany(x => x.ChildMenus).HasForeignKey(x => x.MainMenuId);
            modelBuilder.Entity<Menu>().Property(x => x.DisplayName).IsRequired();
            modelBuilder.Entity<Menu>().HasIndex(x => x.DisplayName).IsUnique();
        }
    }
}
