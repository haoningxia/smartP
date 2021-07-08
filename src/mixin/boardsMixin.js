import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters(['canvasScaleNum']),
        scaleStyle(){
            var ratio = parseFloat(this.canvasScaleNum)/100;
            return 'scale(' + ratio + ',' + ratio + ') translate(-50%,-50%)'
          }
    }
}