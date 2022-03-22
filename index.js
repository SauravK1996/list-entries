import { listArchive } from 'node-7z-archive';

export const getEntries = (srcloc, password) => {

    return new Promise((resolve, reject) => {
        listArchive(srcloc, { p: password })
            .progress(function (files) {

                if (files.length != 0) {
                    resolve(files);
                }

            }).then(function (data) {
                console.log('Extracting done!', data);
            }).catch(function (err) {
                reject(err.message);
            });
    });
}
