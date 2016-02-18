# Publishing a layer

Once the new store is created, GeoServer automatically gives us the option of
publishing layers from this store. Here we chose the entry `OB_LR_pyramid` by
clicking `Publish`.

![Configure ImagePyramid store](../../../assets/add_raster_layer.png)

# Minimal layer configuration

After publishing, GeoServer automatically gives us the option of configuring the
newly created layer. For the moment, we want to set up the layer with some basic
configuration only. Thus we ignore custom styling or caching that will be
handled later on.

* Configure the new layer as follows:
    * *Name:* ocean-bottom-relief
    * *Enabled:* checked
    * *Advertised:* checked
    * *Title:* Ocean bottom relief
    * *Abstract:* Blended depth colors and relief shading of the ocean bottom derived from CleanTOPO2 data.
    * *Native SRS:* EPSG:4326
    * *Declared SRS:* EPSG:4326
    * *SRS handling:* Keep native
* Let GeoServer calculate the bounds of the data by clicking
  `Compute from data`.
* Convert the native bounds to the Lat/Lon Bounding Box by clicking
  `Compute from native bounds`.

![](../../../assets/configure_raster_layer.png)

* Click `Save`.
