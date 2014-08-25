using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BookService.Models
{
    public class Book
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public int Year { get; set; }
        public decimal Price { get; set; }

        //Foreign Key
        public int GenreId { get; set; }
        //Navigation property
        public Genre Genre { get; set; }

        //Foreign Key
        public int AuthorId { get; set; }
        //Navigation property
        public Author Author { get; set; }
    }
}

/* Notes */
/*
the AuthorId defines a foreign key into the Author table. 
 * (For simplicity, I’m assuming that each book has a single author.) 
 * The book class also contains a navigation property to the related Author. 
 * You can use the navigation property to access the related Author in code
*/