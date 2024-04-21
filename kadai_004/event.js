// HTMLドキュメントの読み込みが完了した場合の出力
$(window).on('load', () => {
    console.log('loadイベントが発生しました');
});

// 画面をスクロールした場合の出力
$(window).on('scroll', () => {
    console.log('scrollイベントが発生しました');
});