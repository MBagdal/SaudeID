const mongoose = require('mongoose');
const slugify = require('slugify');

let schema = mongoose.Schema;

var articleSchema = new schema({
    title: {
        type: String,
        required: [true, 'Nome é requerido'],
    },
    description: {
        type: String,
        required: [true, 'O campo descrição é requerido']
    },
    categories: {
        type: String,
        required: [true, 'O campo categoria é requerido']
    },
    author: {
        type: String,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

articleSchema.pre('validate', function(next) {
    if (this.title) {
      this.slug = slugify(this.title, { lower: true, strict: true })
    }
  
    next()
  })

module.exports = mongoose.model('Article', articleSchema);

