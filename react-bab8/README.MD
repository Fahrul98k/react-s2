## CATATAN ##

usestate harus di gunakan dalam function components bukan kelas 

callback dalam function reduce itu memiliki parameter wajib , 1= state , 2=action , 
action nya ini memiliki beberap properti untuk mengubah state itu , salah satu nya "type " 

## OVERVIEW ##
jadi dalam course ini kita me manage action melalui usestate , dan usereduce(bentuk lebih kompleks dari use state) 
alur nya itu 

klik button ---> button memanggil function add atau remove ---->  addd atau remove mengatur stateCart sehingga memiliki parameter tertentu 
-----> parameter ini di gunakan oleh callback dari usereduce ----> callback ini di gunakan untuk merubah state(dalam hal ini variabel yang menampung action) ----> trus kita bisa return  done 

