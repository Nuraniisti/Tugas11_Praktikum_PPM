const mahasiswaNim = '2021006003';
const updateData = {
    nama: 'Ayudyaningtyas',
    gender: 'P',
    prodi: 'TE',
    alamat: 'Sukasari'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));