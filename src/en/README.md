## Welcome to the workshop
# {{ book.workshopName }}

<hr />

**Ulan Bator, Mongolia**

*A 5-day workshop from 2016-02-22 to 2016-02-26*

<hr />

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
