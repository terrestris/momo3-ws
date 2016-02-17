## Welcome to the workshop
# {{ book.workshopName }}

# Sources

* [Workshop URL]({{ book.workshopUrl }})
* [Download workshop (ZIP)]({{ book.workshopDownloadUrl }})
* [Download workshop (PDF)]({{ book.workshopPdfUrl }})
* [Download workshop (EPUB)]({{ book.workshopEpubUrl }})
* [Git repository on github](https://github.com/terrestris/momo3-ws)


# Authors

{% for author in book.authors %}
  - {{ author.name }} ([{{ author.mail }}](mailto:{{ author.mail }}))
{% endfor %}
