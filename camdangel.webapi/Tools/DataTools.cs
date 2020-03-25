using System.Collections.Generic;
using camdangel.webapi.Models;

namespace camdangel.webapi.Tools
{
    public static class DataTools
    {
        public static List<MenuModel> GetMenuList()
        {
            List<MenuModel> menuList = new List<MenuModel>();

            menuList.Add(new MenuModel { Id = 1, Title = "Ana Sayfa", Content = "Bura anasayfa.." });
            menuList.Add(new MenuModel { Id = 2, Title = "Hakkımda", Content = "Bura hakkımda.." });
            menuList.Add(new MenuModel { Id = 3, Title = "İletişim", Content = "Buraya camdan gelebilirsiniz..." });

            return menuList;
        }
    }
}