# MobiHoc 2018 Web Site

This repository contains code and data for the MobiHoc 2018 web site.

## License

Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License (see [LICENSE.md](LICENSE.md) for details).

#### Generating site using jekyll

The website uses jekyll engine to generate the website using the templates.  To get started with jekyll:

    gem install jekyll bundler
    bundle install
    bundle exec jekyll build

To generate the website and serve it from a local webserver, e.g., for debugging

    bundle exec jekyll serve

## Overview

The repository is organized as follows:

* `_config.yml` is a configuration file for the website, defining title, menu, and several basic parameters
* `_data/`      contains datasets in YaML or JSON format defining menu items, conference dates, news, and supporters
* `_includes/`  are supplementary scripts to generate website's content, including templates for menu, news, google analytics, and sponsors
* `_layouts/`   are layout files
* `_assets/`    CSS, javascript, and image assets
* `*.md`, `*.html` Individual pages in markdown or HTML format.

## Getting started as MobiHoc web chair

You'll have to request an account at:

http://campus.acm.org/public/infodir/account_request.cfm

For questions or to check on status of your request, you may try following up with ishelpdesk@hq.acm.org.

You should receive further instructions from ACM on how to upload content to the server when your account is setup.
