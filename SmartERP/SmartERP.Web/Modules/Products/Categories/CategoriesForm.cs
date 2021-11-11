
namespace SmartERP.Products.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Products.Categories")]
    [BasedOnRow(typeof(Entities.CategoriesRow), CheckNames = true)]
    public class CategoriesForm
    {
        public Int64 ParentCategoryId { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
      
    }
}