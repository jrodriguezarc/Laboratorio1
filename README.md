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
| pic_file_name  | t.string     |  Indicates a title of a picture for articles  (file info)                         |
| pic_content_type  | t.string  |  Indicates a type of a file associated for article (file info)                    |
| pic_file_size     | t.integer |  Indicates a size of a file associated for article (file info)                  |
| pic_updated_at    | t.datetime|  Date when the picture has updated (file info)                                     |
| userid      | t.integer       |  ID of the publisher for quickly match with with the articles                     |
| username    | t.string        |  Name of the article owner                                                              |
| fotoname    | t.string        |  Name of a picture to a article                                                         |
| score       | t.integer       |  Actually points for each article                                                       |
| total_scores| t.integer       |  Acummulates points by publication                                                      |
| text        | t.text          |  Description on text field by article                                                   |

     
 
       
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



A Smart Users represents a register user like publisher:

#Smart users

##Generate model of users
```
$ rails generate model User name:string email:string
      invoke  active_record
      create    db/migrate/[timestamp]_create_users.rb
      create    app/models/user.rb
      invoke    rspec
      create      spec/models/user_spec.rb
```

| Property    | Data Type | Description                                                                             |
|:------------|-----------|:----------------------------------------------------------------------------------------|
| name       | t.string        |  Associates a article with specific name                                          | 
| avatar_file_name       | t.string       |  Indicates a price of a product or article                                        |
| avatar_content_type       | t.string       |  Indicates a price of a product or article                    |
| avatar_file_size       | t.string       |  Indicates a price of a product or article                                        |
| avatar_path       | t.integer       |  Indicates a price of a product or article                                        |
| avatar_updated_at      | t.datetime       |  Indicates a price of a product or article                    |
| created_at       | t.datetime       |  Indicates a price of a product or article                                        |
| updated_at       | t.datetime       |  Indicates a price of a product or article                                        |




Adding Tagging With Acts-as-Taggable-on

There are a lot of tagging libraries available but by far the most popular is acts-as-taggable-on. This gem is a little dated but it’s one of the few to have been maintained over the years. To use it in a Rails application we just need to add it to the gemfile then run bundle to install it.

**Example Tagging**

```
$ rails g acts_as_taggable_on:migration
$ rake db:migrate
```

##Tag articles

| Property    | Data Type | Description                                                                             |
|:------------|-----------|:----------------------------------------------------------------------------------------|
| title       | t.string        |  Associates a article with specific name                                          | 
| costo       | t.integer       |  Indicates a price of a product or article                                        |
| email       | t.string        |  Indicates a email of the article publisher                                       |

    t.string   "name"
    t.integer  "idArticle"
    t.datetime "created_at"
    t.datetime "updated_at"
  end


##tagarticles

| Property    | Data Type | Description                                                                             |
|:------------|-----------|:----------------------------------------------------------------------------------------|
| title       | t.string        |  Associates a article with specific name                                          | 
| costo       | t.integer       |  Indicates a price of a product or article                                        |
| email       | t.string        |  Indicates a email of the article publisher                                       |

  create_table "tagarticles", force: true do |t|
    t.string   "name"
    t.integer  "idarticle"
    t.datetime "created_at"
    t.datetime "updated_at"
  end




##Taggings

| Property    | Data Type | Description                                                                             |
|:------------|-----------|:----------------------------------------------------------------------------------------|
| title       | t.string        |  Associates a article with specific name                                          | 
| costo       | t.integer       |  Indicates a price of a product or article                                        |
| email       | t.string        |  Indicates a email of the article publisher                                       |
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
| Property    | Data Type | Description                                                                             |
|:------------|-----------|:----------------------------------------------------------------------------------------|
| created_at       | t.datetime       | Indicates date when the tag was associated                                  | 
| updated_at       | t.datetime       | Indicates date when the tag was updated(association)                        |
| name       | t.string             |  Contains a string with the tag name                                      |
| idarticle       | t.string        |  Contains a integer with the tag id                                       |
| int       | t.string             |  Indentity for asociation                                                      |



**Example how get tags object association and display this**

```
get 'tags/:tag', to: 'articles#index', as: :tag

```


| Property    | Data Type | Description                                                                             |
|:------------|-----------|:----------------------------------------------------------------------------------------|
| tags      | t.string    |  Contains the text for the tag                                                          | 
| name      | t.integer   |  Especific ID for each unique tag                                                       |


**Example how to use tags**

```
add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree
```


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
