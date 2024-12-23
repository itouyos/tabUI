document.addEventListener("DOMContentLoaded", function () {
  // 全タブボタン要素を取得
  const tabButtons = document.querySelectorAll(".tab-button");
  // 全タブコンテンツ要素を取得
  const tabContents = document.querySelectorAll(".tab-content");

  // タブ切り替え関数
  function showTab(targetId) {
    // 全タブコンテンツを非表示に
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    // 全タブボタンのアクティブ状態を解除
    tabButtons.forEach((button) => {
      button.classList.remove("active");
    });

    // 対象のタブコンテンツのみ表示
    const targetContent = document.getElementById(targetId);
    // 安全策：要素があればアクティブに
    if (targetContent) {
      targetContent.classList.add("active");
    }

    // 対応するタブボタンをアクティブに
    const targetButton = document.querySelector(`button[data-target="${targetId}"]`);
    if (targetButton) {
      targetButton.classList.add("active");
    }
  }

  // ボタンクリック時のイベント設定
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // data-target属性から表示したいタブのIDを取得
      const targetId = button.getAttribute("data-target");
      showTab(targetId);
    });
  });
});
