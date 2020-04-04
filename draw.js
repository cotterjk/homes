//Can push to github, and access as non-cross origin data from RAW button in repo
Plotly.d3.csv('https://raw.githubusercontent.com/cotterjk/homes/master/Gainey%20Zestimates%20Street%20Directional%20Rows.csv', function(err, rows){
function unpack(rows, key) {
return rows.map(function(row) { return row[key]; });
}

var z_data=[ ]
for(i=0;i<16;i++)
{
    z_data.push(unpack(rows,i));
}

var data = [{
       z: z_data,
       type: 'surface'
    }];

var layout = {
title: 'Gainey Property Values',
autosize: false,
width: 500,
height: 500,
margin: {
l: 65,
r: 50,
b: 65,
t: 90,
}
};
Plotly.newPlot('myDiv', data, layout);
});
