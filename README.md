
# Module 15 Challenge

Objective: 

    Develop a way to visualize  United States Geological Survey (USGS) data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.




## Part One: Create an Earthquake Visualization

Dataset source: 

    -Selected from USGS.gov website
    -Past Month's Significant Earthquakes
    -https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson
    -The URL of this JSON was utilized to pull in the data for the visualization.

Data Visualization:

    -Leaflet was utilized to create a map that plots all the earthquakes from the dataset based on their longitude and latitude.

    -Data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in color.

    -Popups that provide additional information about the earthquake when its associated marker is clicked.

