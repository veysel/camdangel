using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using camdangel.webapi.Models;
using camdangel.webapi.Tools;

namespace camdangel.webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MenuController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<MenuModel> Get()
        {
            return DataTools.GetMenuList();
        }
    }
}