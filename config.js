var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Taş Ocakları / Stone Quarries',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027.',
    chapters: [
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.844,41.262],
                zoom: 10,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '1.1',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/NddWmP8L/MEF-AAP-027-BAP-PART-II-2025-08-13-14-59-17.png',
            description: '',
            location: {
                center: [28.902,41.257],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/9m1wkdfg/MEF-AAP-027-BAP-PART-II-2025-08-13-15-03-01.png',
            description: '',
            location: {
                center: [28.907,41.261],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '3',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/zV9CGBdJ/MEF-AAP-027-BAP-PART-II-2025-07-31-08-06-43.png',
            description: '',
            location: {
                center: [28.881,41.257],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/pv6zhmVS/MEF-AAP-027-BAP-PART-II-2025-07-30-14-49-44.png',
            description: '',
            location: {
                center: [28.859,41.268],
                zoom: 15,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/2Yp58RBy/MEF-AAP-027-BAP-PART-II-2025-07-30-14-56-29.png',
            description: '',
            location: {
                center: [28.859,41.268],
                zoom: 17,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/WWf1VPF7/MEF-AAP-027-BAP-PART-II-2025-07-30-15-00-52.png',
            description: '',
            location: {
                center: [28.859,41.268],
                zoom: 13,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/hFwnKPMC/MEF-AAP-027-BAP-PART-II-2025-07-30-15-09-03.png',
            description: '',
            location: {
                center: [28.743,41.256],
                zoom: 11,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '6',
            alignment: 'centered',
            hidden: false,
            title: '3. Havalimanı Projesinde Toprağın Metabolik Dolaşımı: 2000 ve 2020 yılları arasında uydu fotoğraflarının çakıştırılması ile oluşturulan çalışmada, havalimanı proje alanı ve kuzeyindeki toprak hareketliliği incelendiğinde açık maden ocakları ve sulak alanlarda gerçekleşen “sürekli bir doldurma ve boşaltma” hamlesine rastlanır. Bir başka deyişle, kentin metabolizmasında betonun dolaşımı ile toprağın dolaşımı birbirine dolanıktır.',
            image: 'https://i.ibb.co/Fk26sn1M/simsiz-video-Clipchamp-ile-yap-ld-10.gif',
            description: 'Metabolic FLow of Soil Metabolic Flows of Soil in the Context of the 3rd Airport Project: In the visualization study created by overlaying satellite images from the years 2000 and 2020, an examination of the airport project area and the changes in soil movement and flow in the northern part of the area reveals a continuous pattern of filling and emptying in open-pit mines and wetlands. In other words, the flow of concrete and the flow of soil are entangled within the metabolism of the city. ',
            location: {
                center: [28.859,41.268],
                zoom: 14,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
