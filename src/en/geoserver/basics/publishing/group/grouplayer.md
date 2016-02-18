# Layer group

A layer group, as its name suggests, is a collection of layers. A layer group
makes it possible to request multiple layers with a single WMS request. A layer
group contains information about the layers that comprise the layer group, the
order in which they are rendered, the projection, associated styles, and more.
This information can be different from the defaults for each individual layer.

Layer groups do not respect the concept of workspace, and are relevant only to
WMS requests.

# Create grouped layer

Use countries and ocean bottom relief

* Go to `Data` &#10093; `Layer Groups` &#10093; `Add new layer group`.
* Create a new layer group as follows:
    * *Name:* world-layer
    * *Title:* World layer
    * *Workspace:* momo
* Find and select `EPSG:4326` under `Coordinate Reference System`.

![](../../../assets/layergroup_select_crs.png)

* Click `Layers` &#10093; `Add Layer`, search for `ocean-bottom` and click the
  `ocean-bottom-relief` in the list to add the layer to the group.

![](../../../assets/layergroup_add_layer.png)

* Repeat the step above for layer `countries`.

* Let GeoServer generate the bounds for this layer by pressing `Generate bounds`.

![](../../../assets/configure_group_layer.png)

* Click `Save`.
