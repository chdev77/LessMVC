using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LessMVC.Startup))]
namespace LessMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
