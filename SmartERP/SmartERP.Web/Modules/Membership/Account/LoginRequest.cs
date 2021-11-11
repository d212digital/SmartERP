using Serenity.ComponentModel;
using Serenity.Services;

namespace SmartERP.Membership
{
    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow), CheckNames = true)]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("username")]
        //[Placeholder("default username is 'admin'")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("password"), Required(true)]
        //[PasswordEditor, Placeholder("default password for 'admin' is 'admin1234'"), Required(true)]
        public string Password { get; set; }
    }
}