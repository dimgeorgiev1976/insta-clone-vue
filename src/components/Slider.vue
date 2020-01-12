<template>
  <h1>Slider</h1>
</template>

<script>


export default {
    name: 'Slider',
    props: ['data'],
    data () {
        return {
            "images" :[ 
                "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
                "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
                "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
                "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
            ],
            timer: null,
            currentIndex: 0
        }
    },

    mounted: function () {
        this.startSlider ()
    },
    methods: {
        startSlider: function () {
            this.timer = setInterval(this.next, 4000)
        },
        next: function () {
            this.currentIndex += 1
        },
        prev: function () {
            this.currentIndex -= 1
        }
    },

    computed: {
        currentImg : function () {
            return this.images [Math.abs(this.currentIndex) 
            % this.images.length]
        }
    }
}
</script>