const fs = require('fs');
const path = require('path');

const songsDir = './songs'; // 音樂資料夾路徑

// 定義要過濾掉的關鍵字（根據你的截圖整理）
const trashWords = [
    '( 歌詞 )', '-', '【歌詞】','(歌词版)', 
    '(歌詞版)', '_Lyrics', '_字幕版', '_MV', 
    '_MV導演親剪音樂視角版', '電影月老主題曲', 
    '_High_Quality', '_1080p', '_720p', '_Audio'
];

fs.readdirSync(songsDir).forEach(oldFile => {
    if (oldFile.endsWith('.mp3')) {
        let newName = oldFile;

        // 1. 處理「歌手 - 歌名」格式，通常我們只需要歌名
        // 假設格式是 "歌手_歌名_其他.mp3"
        if (newName.includes('_-_')) {
            newName = newName.split('_-_')[1]; // 取後面的歌名部分
        }

        // 2. 批量移除垃圾字眼
        trashWords.forEach(word => {
            newName = newName.split(word).join('');
        });

        // 3. 處理剩餘的底線與空格
        newName = newName.replace(/_/g, ' ').trim();
        
        // 4. 確保最後還有 .mp3
        if (!newName.endsWith('.mp3')) newName += '.mp3';

        const oldPath = path.join(songsDir, oldFile);
        const newPath = path.join(songsDir, newName);

        if (oldPath !== newPath) {
            // 如果新檔名已存在，加上編號避免覆蓋
            if (fs.existsSync(newPath)) {
                console.log(`⚠️ 跳過 (檔案已存在): ${newName}`);
            } else {
                fs.renameSync(oldPath, newPath);
                console.log(`✅ 改名成功: ${oldFile} -> ${newName}`);
            }
        }
    }
});

console.log('\n✨ 全部處理完畢！請去 songs 資料夾檢查。');