<template>
    <div class="comp-container" id="component-container" >
        <div id="comp-content-container" class="comp-content-container" :style="{
        'background': '#fff',
        'transform': type == 'preview' ? '' : scaleStyle,
        'width': viewWidth + 'px'
        } ">
            <div style="height: 100%; overflow-y:auto; ">
                <div class="comp-list-container">
                    <template>
                        <div>
                            
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import boardsMixin from "@/mixin/boardsMixin";
export default {
    props: ["type"],
    mixins: [boardsMixin],
    computed: {
      ...mapGetters(['reportData','viewWidth'])  
    }
}
</script>
<style lang="less">
.comp-content-container {
    width: 100%;
    height: 100%;
    transform-origin: left top;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-size: 100% 100% !important;
  }
</style>