#API Reference

The following resources are made available by the *SmartShopping* API:

* [Articles](#articles)
* [smart_users](#smart_users)
* [tag_articles](#tag_articles)
* [tagarticles](#tagarticles)
* [taggings](#taggings)
* [taggs](#taggs)
* [users](#users)



The API follows a MVC design to control the access and manipulation of these resources. 

This file is auto-generated from the current state of the database. Instead of editing this file, please use the migrations feature of `Active Record` to incrementally modify your database, and then regenerate this schema definition.

##Articles
A articles represents a register article and the following properties:

| Property    | Data Type | Description                                                                             |
|:------------|-----------|:----------------------------------------------------------------------------------------|
| title       | t.string        |  Associates a article with specific name                                          | 
| costo       | t.integer       |  Indicates a price of a product or article                                        |
| email       | t.string        |  Indicates a email of the article publisher                                       |
| direccion   | t.string        |  Return the address of the person who published the article                       |
| created_at  | t.datetime      |  Date when the article was created                                                |
| updated_at  | t.datetime      |  Date when the article was created                                                |
| pic_file_name  | t.string     |  Indicates a title of a picture for articles                                      |
| pic_content_type  | t.string  |  Indicates a type of a file associated for article                                |
| pic_file_size     | t.integer |  Indicates a size of a file associated for article                                |
| pic_updated_at    | t.datetime|  Date when the picture has updated                                                |
| userid      | t.integer       |  ID of the publisher for quickly match with with the articles                     |
| username    | t.string        |                                                                                         |
| fotoname    | t.string        |                                                                                         |
| score       | t.integer       |                                                                                         |
| total_scores| t.integer       |                                                                                         |
| text        | t.text          |                                                                                         |

     
 
       
###Api::ArticlesController

| Method | Description                                           |
|:-------|:------------------------------------------------------|
| index             |  Obtains user data for a list of user id's |
| show              |  Gets all the articles and displays the results associated respectively each article      |
| saveimage         |  Save a image in database                                                |            
| searchArticle     |  Obtains a specific article on decreased order| 
| searchTags        |  Gets all tags associated with a unique tag-article                                      |     
| specialSearch     |  Obtains the matches associated to a global search for articles   |


###Api::ArticlesModels


| Method | Description                                           |
|:-------|:------------------------------------------------------|
| belongs_to             |  Obtains user data for a list of user id's |
| acts_as_taggable       | Creates a relation between articles and tags (best way to relation many to many)      |
| self.search            |  Searches articles with equal title  article    |
| self.byauthor          |  Searches articles with equal name of author    |


##Smart users
  create_table "smart_users", force: true do |t|
    t.string   "name"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "avatar_path"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tag_articles", force: true do |t|


##Tag articles

    t.string   "name"
    t.integer  "idArticle"
    t.datetime "created_at"
    t.datetime "updated_at"
  end


##tagarticles

  create_table "tagarticles", force: true do |t|
    t.string   "name"
    t.integer  "idarticle"
    t.datetime "created_at"
    t.datetime "updated_at"
  end




##Taggings

  create_table "taggings", force: true do |t|
    t.integer  "tag_id"
    t.integer  "taggable_id"
    t.string   "taggable_type"
    t.integer  "tagger_id"
    t.string   "tagger_type"
    t.string   "context",       limit: 128
    t.datetime "created_at"
  end

**Example how add tags with id**


```
  add_index "taggings", ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true, using: :btree
  
  add_index "taggings", ["taggable_id", "taggable_type", "context"], name: "index_taggings_on_taggable_id_and_taggable_type_and_context", using: :btree
```

##taggs


  create_table "taggs", force: true do |t|
    t.string   "name"
    t.string   "idarticle"
    t.string   "int"
    t.datetime "created_at"
    t.datetime "updated_at"
  end


  create_table "tags", force: true do |t|
    t.string  "name"
    t.integer "taggings_count", default: 0
  end



**Example how to use tags**

```
add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree
```



##Users

  create_table "users", force: true do |t|
    t.string   "provider"
    t.string   "uid"
    t.string   "name"
    t.string   "oauth_token"
    t.datetime "oauth_expires_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "score"
  end
___




#Concepts 

##Active Record
**Active Record** is the M in MVC - the model - which is the layer of the system responsible for representing business data and logic. Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database. It is an implementation of the Active Record pattern which itself is a description of an Object Relational Mapping system.

##GEMFILE
Bundler provides a consistent environment for Ruby projects by tracking and installing the exact gems and versions that are needed. 

Bundler is an exit from dependency hell, and ensures that the gems you need are present in development, staging, and production. Starting work on a project is as simple as `bundle install`. The way how we config the file is the next:

```
source 'https://rubygems.org'
gem 'rails', '4.1.5'
gem 'pg'
gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
group :production do
   gem 'rails_12factor'
 end
gem 'paperclip', :git => "git://github.com/thoughtbot/paperclip.git"
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0',          group: :doc
gem 'spring',        group: :development
gem "tabs_on_rails"
gem 'devise'
gem 'oauth2'
gem 'bootstrap-sass', '~> 3.1.1'
gem 'acts-as-taggable-on'
gem 'omniauth-facebook'
gem 'omniauth-twitter'
```


#License

The MIT License

Copyright (c) 2010-2014 Instituto Tecnológico de Costa Rica, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
