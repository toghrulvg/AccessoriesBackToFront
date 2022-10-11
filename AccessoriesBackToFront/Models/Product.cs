using Microsoft.EntityFrameworkCore.Query;

namespace AccessoriesBackToFront.Models
{
    public class Product : BaseEntity
    {
        public string Image { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
    }
}
