/* script.js 파일 - 최상단에 아래 코드를 붙여넣습니다. */

const restaurantData = [
    // ***** 1번 식당: 고부삼 예시 *****
    { 
        name: "고부삼", 
        category: "한식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.595518, 
        lng: 127.060981,
        // 텍스트는 반드시 따옴표 ""로 묶습니다.
        comment: "삼겹정식이 가성비가 좋다!", 
        photo_url: "https://i.postimg.cc/s2hs95gq/gobusam.jpg", 
        link: "https://naver.me/GlJ6zr0V",
        AI_Rank: 80
    }, // <-- 중요: 객체가 끝나면 반드시 쉼표(,)를 찍고 다음 객체로 넘어갑니다.
    
    // ***** 2번 식당: 영화장 예시 *****
    {
        name: "영화장", 
        category: "중식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.596543, 
        lng: 127.060931,
        comment: "외대 중국집 1티어", 
        photo_url: "https://i.postimg.cc/Dw9LgkhV/yeonghwajang.jpg", 
        link: "https://naver.me/GrmrN8PB",
        AI_Rank: 80
    }, 
    {
        name: "할머니 보쌈", 
        category: "한식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.598393, 
        lng: 127.056138,
        comment: "보쌈하면 할보", 
        photo_url: "https://i.postimg.cc/wj1TB7nf/halbo.jpg", 
        link: "https://naver.me/Fr7b8eWO",
        AI_Rank: 80
    }, 
    {
        name: "송원", 
        category: "한식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.595664, 
        lng: 127.060517,
        comment: "제육, 된찌하면 송원", 
        photo_url: "https://i.postimg.cc/tJv6HMMb/song-won.jpg", 
        link: "https://naver.me/GCvqw7R4",
        AI_Rank: 80
    }, 
    {
        name: "마루기", 
        category: "일식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.595449, 
        lng: 127.060486,
        comment: "라멘, 가츠동 wow", 
        photo_url: "https://i.postimg.cc/nLfDZ70s/malugi.jpg", 
        link: "https://naver.me/Fjbn1pc2",
        AI_Rank: 80
    }, 
    {
        name: "돈두렁", 
        category: "한식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.595787, 
        lng: 127.060439,
        comment: "삼겹살하면 돈두렁", 
        photo_url: "https://i.postimg.cc/D0NSNb8M/donduleong.jpg", 
        link: "https://naver.me/5R4OmqQu",
        AI_Rank: 80
    }, 
    {
        name: "알촌", 
        category: "한식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.598642, 
        lng: 127.057158,
        comment: "가격대비 양 굿", 
        photo_url: "https://i.postimg.cc/pXg9YzNp/alchon.jpg", 
        link: "https://naver.me/FO97e2ou",
        AI_Rank: 80
    }, 
    {
        name: "행복한한끼", 
        category: "한식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.595614, 
        lng: 127.058357,
        comment: "집밥은 행복한 한끼", 
        photo_url: "YOUR_PHOTO_URL_HERE", 
        link: "https://naver.me/GrmrN8PB",
        AI_Rank: 80
    }, 
    {
        name: "샤로스톤", 
        category: "양식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.595414, 
        lng: 127.061235,
        comment: "스테이크, 규카츠는 샤로스톤", 
        photo_url: "https://i.postimg.cc/j2D5ydZf/syaloseuton.jpg", 
        link: "https://naver.me/FN7RvLAK",
        AI_Rank: 80
    }, 
    {
        name: "호헌장담", 
        category: "한식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.598524, 
        lng: 127.057172,
        comment: "데이트와 모임에 완벽한 공간", 
        photo_url: "https://i.postimg.cc/qBFg4y7J/hoheonjangdam.jpg", 
        link: "https://naver.me/xeAfyzOZ",
        AI_Rank: 80
    }, 
    {
        name: "치보", 
        category: "양식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.599097, 
        lng: 127.057618,
        comment: "후문 파스타는 치보", 
        photo_url: "https://i.postimg.cc/XvnYQgsf/chibo.jpg", 
        link: "https://naver.me/xKEbgSmV",
        AI_Rank: 80
    }, 
    {
        name: "피렌지앵", 
        category: "양식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.595669, 
        lng: 127.062892,
        comment: "정문 파스타는 피렌지앵", 
        photo_url: "https://i.postimg.cc/vBN88wbT/pilenjiaeng.jpg", 
        link: "https://naver.me/xMncBHWw",
        AI_Rank: 80
    }, 
    {
        name: "돼랑이우랑이", 
        category: "일식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.595101, 
        lng: 127.063509,
        comment: "다양한 모둠카츠의 풍미", 
        photo_url: "https://i.postimg.cc/wx1LX6yT/dwaelang-iulang-i.jpg", 
        link: "https://naver.me/FfeLMxrZ",
        AI_Rank: 80
    }, 
    {
        name: "밀플랜비", 
        category: "기타",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.599110, 
        lng: 127.057801,
        comment: "부리또는 밀플랜비", 
        photo_url: "https://i.postimg.cc/52SC4yGC/milpeullaenbi.jpg", 
        link: "https://naver.me/FeXYKN2V",
        AI_Rank: 80
    }, 
    {
        name: "아지매식당", 
        category: "한식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.595655, 
        lng: 127.060697,
        comment: "치즈제육 wow", 
        photo_url: "https://i.postimg.cc/63g7jv25/ajimaesigdang.jpg", 
        link: "https://naver.me/5WOjN7Gf",
        AI_Rank: 80
    }, 
    {
        name: "카빙당", 
        category: "일식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.598210, 
        lng: 127.056020,
        comment: "일식은 카빙당", 
        photo_url: "https://i.postimg.cc/bNQGgdq4/kabingdang.jpg", 
        link: "https://naver.me/5A3N4sez",
        AI_Rank: 80
    }, 
    {
        name: "통일 부대찌개", 
        category: "한식",
        // 좌표는 숫자이므로 따옴표를 사용하지 않습니다.
        lat: 37.595725, 
        lng: 127.060321,
        comment: "부대찌개 goat", 
        photo_url: "https://i.postimg.cc/j5w27S8B/tong-ilbudaejjigae.jpg", 
        link: "https://naver.me/F5D1Iz0k",
        AI_Rank: 80
    }
    // ... 나머지 16개 식당 정보를 이 형식에 맞춰 이어서 추가합니다.
    // 마지막 식당 데이터 뒤에는 쉼표(,)를 찍지 않습니다.
];
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
