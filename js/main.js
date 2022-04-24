// 網頁的主程式寫在這裡
// 綁定 .ad-toggle-btn 的點擊事件
$(".ad-toggle-btn").click(function () {
    console.log("[.ad-toggle-btn被點擊了]");

});

// 綁定 #removeSideBoxBtn 的點擊事件
$("#removeSideBoxBtn").click(function () {
    console.log("[#removeSideBoxBtn被點擊了]")

});

// 綁定 .navbar 裡面 .nav-link 的點擊事件
$(".navbar .nav-link").click(function () {
    console.log("[導覽列按鈕被點擊了]", this);
    // 取得滑動目標

    // 取得滑動目標的所在座標

    // 設定動畫時間

    // 執行滑動動畫

});

// 取得現在的年份
const year = new Date().getFullYear();
// 將年份顯示在 id="yearShow" 的元素內
$("#yearShow").text(year);