/* script.js 파일 */
// 1. 지도를 담을 HTML 요소
var mapContainer = document.getElementById('map'); 
var mapOption = {
    // 외대 중심 좌표 (임시 좌표)
    center: new kakao.maps.LatLng(37.5957, 127.0592), 
    level: 3 
};

// 2. 지도를 생성합니다.
var map = new kakao.maps.Map(mapContainer, mapOption);
