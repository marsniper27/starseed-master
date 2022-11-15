<template>
    
<main id="main">
    <!-- <trading-vue :data="this.$data" style="overflow: hidden; width: 587px; height: 273.933px;"></trading-vue> -->
    <div class="recharts-responsive-container" style="width: 100%; height: 100%;">
        <div>
            <div id="test-id"><div class="tv-lightweight-charts" style="overflow: hidden; width: 587px; height: 273.933px;">
                <table cellspacing="0" style="height: 273.933px; width: 587px;"><tr><td style="padding: 0px;">
                    </td>
                    <td style="padding: 0px; position: relative; width: 547px; height: 247.933px;">
                        <div style="width: 100%; height: 100%; position: relative; overflow: hidden;">
                            <canvas width="547" height="247" style="user-select: none; -webkit-tap-highlight-color: transparent; width: 547px; height: 247.933px; position: absolute; z-index: 1; left: 0px; top: 0px;">
                            </canvas>
                            <canvas width="547" height="247" style="user-select: none; -webkit-tap-highlight-color: transparent; width: 547px; height: 247.933px; position: absolute; z-index: 2; left: 0px; top: 0px;"></canvas>
                        </div>
                    </td>
                    <td style="padding: 0px;">
                        <div style="height: 247.933px; overflow: hidden; width: 40px; left: 0px; position: relative; min-width: 40px; cursor: default;">
                            <canvas width="40" height="247" style="user-select: none; -webkit-tap-highlight-color: transparent; width: 40px; height: 247.933px; position: absolute; z-index: 1; left: 0px; top: 0px;"></canvas>
                            <canvas width="40" height="247" style="user-select: none; -webkit-tap-highlight-color: transparent; width: 40px; height: 247.933px; position: absolute; z-index: 2; left: 0px; top: 0px;"></canvas>
                        </div>
                    </td>
                    </tr>
                    <tr>
                        <td style="padding: 0px;"></td><td style="height: 26px; padding: 0px; width: 547px;">
                            <div style="width: 100%; height: 100%; position: relative; overflow: hidden;">
                                <canvas width="547" height="26" style="user-select: none; -webkit-tap-highlight-color: transparent; width: 547px; height: 26px; position: absolute; z-index: 1; left: 0px; top: 0px;"></canvas>
                                <canvas width="547" height="26" style="user-select: none; -webkit-tap-highlight-color: transparent; width: 547px; height: 26px; position: absolute; z-index: 2; left: 0px; top: 0px;"></canvas>
                            </div>
                        </td>
                        <td style="padding: 0px;">
                            <div style="width: 40px; height: 26px; overflow: hidden; min-width: 40px;">
                                <canvas width="40" height="26" style="user-select: none; -webkit-tap-highlight-color: transparent; width: 40px; height: 26px;"></canvas>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tooltip-id" class="three-line-legend" style="display: block; left: 10px; top: 50px; background-color: transparent;">
                <div style="font-size: 22px; margin: 4px 0px; color: white">
                    1.17
                    <span style="font-size: 12px; margin-left: 4px;">
                        STARQI/QI
                        <span></span>
                    </span>
                </div>
            </div>
        </div>
        <div class="sc-gxMtzJ crrRWk">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
        </div>
    </div>
        <div style="position: absolute; width: 0px; height: 0px; visibility: hidden; display: none;"></div>
    </div>
</main>
</template>
<script>

import TradingVue from 'trading-vue-js'

export default {
    name: 'app',
    components: { TradingVue },
    data() {
        return {
            ohlcv: [
                [ 1551128400000, 33,  37.1, 14,  14,  196 ],
                [ 1551132000000, 13.7, 30, 6.6,  30,  206 ],
                [ 1551135600000, 29.9, 33, 21.3, 21.8, 74 ],
                [ 1551139200000, 21.7, 25.9, 18, 24,  140 ],
                [ 1551142800000, 24.1, 24.1, 24, 24.1, 29 ],
            ]
        }
    }
}

</script>