/* script.js 파일 - 최종 통합본 */

// =================================================================
// 1. 데이터 정의 (Data Definition) - 파일 맨 위에 위치해야 합니다.
// =================================================================

const restaurantData = [
    // ***** 1번 식당: 고부삼 *****
    { 
        name: "고부삼", 
        category: "한식",
        lat: 37.595518, 
        lng: 127.060981,
        comment: "삼겹정식이 가성비가 좋다!", 
        photo_url: "https://i.postimg.cc/s2hs95gq/gobusam.jpg", 
        link: "https://naver.me/GlJ6zr0V",
        AI_Rank: 80
    }, 
    // ***** 2번 식당: 영화장 *****
    {
        name: "영화장", 
        category: "중식",
        lat: 37.596543, 
        lng: 127.060931,
        comment: "외대 중국집 1티어", 
        photo_url: "https://i.postimg.cc/Dw9LgkhV/yeonghwajang.jpg", 
        link: "https://naver.me/GrmrN8PB",
        AI_Rank: 80
    },
    // ***** 3번 식당: 할머니 보쌈 *****
    {
        name: "할머니 보쌈", 
        category: "한식",
        lat: 37.598393, 
        lng: 127.056138,
        comment: "보쌈하면 할보", 
        photo_url: "https://i.postimg.cc/wj1TB7nf/halbo.jpg", 
        link: "https://naver.me/Fr7b8eWO",
        AI_Rank: 80
    }, 
    // ***** 4번 식당: 송원 *****
    {
        name: "송원", 
        category: "한식",
        lat: 37.595664, 
        lng: 127.060517,
        comment: "제육, 된찌하면 송원", 
        photo_url: "https://i.postimg.cc/tJv6HMMb/song-won.jpg", 
        link: "https://naver.me/GCvqw7R4",
        AI_Rank: 80
    }, 
    // ***** 5번 식당: 마루기 *****
    {
        name: "마루기", 
        category: "일식",
        lat: 37.595449, 
        lng: 127.060486,
        comment: "라멘, 가츠동 wow", 
        photo_url: "https://i.postimg.cc/nLfDZ70s/malugi.jpg", 
        link: "https://naver.me/Fjbn1pc2",
        AI_Rank: 80
    }, 
    // ***** 6번 식당: 돈두렁 *****
    {
        name: "돈두렁", 
        category: "한식",
        lat: 37.595787, 
        lng: 127.060439,
        comment: "삼겹살하면 돈두렁", 
        photo_url: "https://i.postimg.cc/D0NSNb8M/donduleong.jpg", 
        link: "https://naver.me/5R4OmqQu",
        AI_Rank: 80
    }, 
    // ***** 7번 식당: 알촌 *****
    {
        name: "알촌", 
        category: "한식",
        lat: 37.598642, 
        lng: 127.057158,
        comment: "가격대비 양 굿", 
        photo_url: "https://i.postimg.cc/pXg9YzNp/alchon.jpg", 
        link: "https://naver.me/FO97e2ou",
        AI_Rank: 80
    }, 
    // ***** 8번 식당: 행복한한끼 *****
    {
        name: "행복한한끼", 
        category: "한식",
        lat: 37.595614, 
        lng: 127.058357,
        comment: "집밥은 행복한 한끼", 
        photo_url: "https://i.postimg.cc/j2D5ydZf/syaloseuton.jpg", // 임시 이미지 사용
        link: "https://naver.me/GrmrN8PB",
        AI_Rank: 80
    }, 
    // ***** 9번 식당: 샤로스톤 *****
    {
        name: "샤로스톤", 
        category: "양식",
        lat: 37.595414, 
        lng: 127.061235,
        comment: "스테이크, 규카츠는 샤로스톤", 
        photo_url: "https://i.postimg.cc/j2D5ydZf/syaloseuton.jpg", 
        link: "https://naver.me/FN7RvLAK",
        AI_Rank: 80
    }, 
    // ***** 10번 식당: 호헌장담 *****
    {
        name: "호헌장담", 
        category: "한식",
        lat: 37.598524, 
        lng: 127.057172,
        comment: "데이트와 모임에 완벽한 공간", 
        photo_url: "https://i.postimg.cc/qBFg4y7J/hoheonjangdam.jpg", 
        link: "https://naver.me/xeAfyzOZ",
        AI_Rank: 80
    }, 
    // ***** 11번 식당: 치보 *****
    {
        name: "치보", 
        category: "양식",
        lat: 37.599097, 
        lng: 127.057618,
        comment: "후문 파스타는 치보", 
        photo_url: "https://i.postimg.cc/XvnYQgsf/chibo.jpg", 
        link: "https://naver.me/xKEbgSmV",
        AI_Rank: 80
    }, 
    // ***** 12번 식당: 피렌지앵 *****
    {
        name: "피렌지앵", 
        category: "양식",
        lat: 37.595669, 
        lng: 127.062892,
        comment: "정문 파스타는 피렌지앵", 
        photo_url: "https://i.postimg.cc/vBN88wbT/pilenjiaeng.jpg", 
        link: "https://naver.me/xMncBHWw",
        AI_Rank: 80
    }, 
    // ***** 13번 식당: 돼랑이우랑이 *****
    {
        name: "돼랑이우랑이", 
        category: "일식",
        lat: 37.595101, 
        lng: 127.063509,
        comment: "다양한 모둠카츠의 풍미", 
        photo_url: "https://i.postimg.cc/wx1LX6yT/dwaelang-iulang-i.jpg", 
        link: "https://naver.me/FfeLMxrZ",
        AI_Rank: 80
    }, 
    // ***** 14번 식당: 밀플랜비 *****
    {
        name: "밀플랜비", 
        category: "기타",
        lat: 37.599110, 
        lng: 127.057801,
        comment: "부리또는 밀플랜비", 
        photo_url: "https://i.postimg.cc/52SC4yGC/milpeullaenbi.jpg", 
        link: "https://naver.me/FeXYKN2V",
        AI_Rank: 80
    }, 
    // ***** 15번 식당: 아지매식당 *****
    {
        name: "아지매식당", 
        category: "한식",
        lat: 37.595655, 
        lng: 127.060697,
        comment: "치즈제육 wow", 
        photo_url: "https://i.postimg.cc/63g7jv25/ajimaesigdang.jpg", 
        link: "https://naver.me/5WOjN7Gf",
        AI_Rank: 80
    }, 
    // ***** 16번 식당: 카빙당 *****
    {
        name: "카빙당", 
        category: "일식",
        lat: 37.598210, 
        lng: 127.056020,
        comment: "일식은 카빙당", 
        photo_url: "https://i.postimg.cc/bNQGgdq4/kabingdang.jpg", 
        link: "https://naver.me/5A3N4sez",
        AI_Rank: 80
    }, 
    // ***** 17번 식당: 통일 부대찌개 *****
    {
        name: "통일 부대찌개", 
        category: "한식",
        lat: 37.595725, 
        lng: 127.060321,
        comment: "부대찌개 goat", 
        photo_url: "https://i.postimg.cc/j5w27S8B/tong-ilbudaejjigae.jpg", 
        link: "https://naver.me/F5D1Iz0k",
        AI_Rank: 80
    }
    // 여기에 18번째 식당 데이터가 들어간 후 쉼표가 없어야 합니다.
];

// =================================================================
// 2. 지도 초기화 (Map Initialization)
// =================================================================

// 1. 지도를 담을 HTML 요소
var mapContainer = document.getElementById('map'); 
var mapOption = {
    // 외대 중심 좌표 (임시 좌표)
    center: new kakao.maps.LatLng(37.5957, 127.0592), 
    level: 3 
};

// 2. 지도를 생성합니다.
var map = new kakao.maps.Map(mapContainer, mapOption); 

// =================================================================
// 3. 마커 생성 및 필터링 로직 (Marker & Filter Logic)
// =================================================================

// 마커 객체와 카테고리를 담아둘 배열을 생성합니다.
const markers = []; 

// 인포윈도우 객체 생성 (커스텀 오버레이)
const infowindow = new kakao.maps.CustomOverlay({
    map: map,
    yAnchor: 1.5
});
infowindow.setMap(null); // 초기에는 정보창을 숨깁니다.


restaurantData.forEach(function(place) {
    // 3.1. 마커 위치 설정
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.lat, place.lng),
        title: place.name
    });

    // 3.2. 마커와 카테고리를 markers 배열에 저장합니다.
    markers.push({marker: marker, category: place.category}); 
    
    // 3.3. 마커에 클릭 이벤트 연결
    kakao.maps.event.addListener(marker, 'click', function() {
        // 3.4. 정보창 내용 구성 (HTML 템플릿)
        var content = 
            '<div class="info-wrap">' +
                // 닫기 버튼: 클릭 시 정보창을 숨김 (인라인 JS)
                '<div class="close-btn" onclick="infowindow.setMap(null)">❌</div>' + 
                '<h4 class="info-title">' + place.name + '</h4>' +
                // AI 코멘트
                '<p class="info-comment">AI 코멘트: ' + place.comment + '</p>' +
                '<div class="info-body">' +
                    // 사진
                    '<img src="' + place.photo_url + '" alt="' + place.name + '" style="width:100%; height:100px; object-fit: cover;">' + 
                    // 외부 링크 버튼
                    '<a href="' + place.link + '" target="_blank" class="info-link-btn">지도에서 자세히 보기</a>' +
                '</div>' +
            '</div>';

        // 3.5. 정보창 업데이트 및 표시
        infowindow.setContent(content);
        infowindow.setPosition(marker.getPosition());
        infowindow.setMap(map);
    });
});


// 4. ***** 카테고리 필터링 함수 (핵심 AI 로직) *****
function filterMarkers(category) {
    markers.forEach(item => {
        const marker = item.marker;
        const placeCategory = item.category;

        // "전체"를 선택하거나, 식당의 카테고리가 일치하면 마커를 표시
        if (category === "전체" || placeCategory.includes(category)) {
            marker.setMap(map);
        } else {
            marker.setMap(null); // 마커를 숨김
        }
    });
}


// =================================================================
// 5. 이벤트 핸들러 및 폼 채우기 (Event Handlers & Form Fill)
// =================================================================

// 5.1. HTML 버튼에 이벤트 리스너 연결
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // 버튼 스타일링
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // 필터링 함수 실행
        const category = this.getAttribute('data-category');
        filterMarkers(category);
    });
});


// 5.2. 리뷰 폼 식당 목록 채우기
const selectElement = document.getElementById('review-restaurant-name');

restaurantData.forEach(place => {
    const option = document.createElement('option');
    option.value = place.name;
    option.textContent = place.name;
    selectElement.appendChild(option);
});
