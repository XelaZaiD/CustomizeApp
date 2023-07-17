import fs from 'fs-extra';


function copyManifestFile(src, dest, cacheId) {
    if(!cacheId) throw Error('Provide a cacheId');

    const srcFile  = src + '/kony.manifest_min';
    const destFile = dest + '/temp/kony.manifest';

    console.time('Successfully copied kony.manifest file in :');

    return new Promise((resolve, reject) => {
        fs.lstat(srcFile, (err, stats) => {
            if(err) {resolve(); return;}

            if(stats.isFile()) {
                fs.copy(srcFile, destFile, async (err) => {
                    const replaceTokensVal = {
                        'jslib': '../../'+cacheId+'/desktopweb/jslib',
                        'appjs': '../../'+cacheId+'/desktopweb/appjs',
                        'konydesktop': '../../'+cacheId+'/desktopweb/konydesktop'
                    };

                    if(err) {reject(); throw err;}

                    replaceTokens(destFile, replaceTokensVal).then(() => {
                        resolve();
                    }).catch((err) => {
                        reject(err);
                    });
                });
            }
        });
    }).then(() => {
        console.timeEnd('Successfully copied kony.manifest file in :');
    }).catch((err) => {
        console.log('Failed in copying kony.manifest file.');
        throw err;
    });
}


function replaceTokens(filePath, replaceTokenValues) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8',(err, data) => {
            if(err) {reject(); throw err;}

            for(let key in replaceTokenValues) {
                let keyG = new RegExp(key, 'g');
                data = data.replace(keyG, replaceTokenValues[key]);
            }

            fs.writeFile(filePath, data, 'utf8', err => {
                if(err) {reject(); throw err;}
                resolve();
            });
        });
    });
}


export {copyManifestFile};