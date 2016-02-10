# Contact Information

Each OGC web service served by the GeoServer contains the contact details
associated with the server as part of their capabilities document. You can read
and manipulate these information in the section `Contact Information` under
<code>About & Status</code>.

![Contact page.](../../../assets/administration_contact.png)

## Exercise

1. Fill in your contact informations in `Contact Information` page.
2. Click `Submit`.
3. Open the following link to request the `GetCapabilites` document provided by
   your GeoServer instance and verify your changes:

   {{ book.geoServerBaseUrl }}/ows?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.1.0

   *Hint:* You can also request the above GetCapabilities document by visiting
   the [Welcome Page](../overview.md) and select the links on the right handed
   side.
