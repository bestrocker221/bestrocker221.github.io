# Jekyll
1. gem install bundler
2. bundle install
3. bundle exec jekyll build
4. bundle exec jekyll serve


# Generated site
is under _site


# code highligting
`gem install kramdown rouge`

After installing kramdown and rouge, you can add the following to your _config.yml file.

```
markdown: kramdown
highlighter: rouge
    input: GFM
```
