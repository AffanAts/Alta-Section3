# Summary React Hook

### Hook merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur react yang lain tanpa perlu menulis sebuah kelas.
### Hooks dasar yang digunakan pada react yaitu useState, useEffect, dan useContext. Hooks tambahannya ada useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect,dan useDebugValue
### Aturan pada hooks
   1.Hanya memanggil hooks di tingkat atas. Jangan memanggil hooks dari dalam loops, conditions, atau nested functions
   2.Hanya memanggil hooks dari fungsi-fungsi react. Jangan memanggil hooks dari fungsi-fungsi javascript biasa, kita dapat memanggil hooks dari komponen-komponen fungsi react dan dari custom hooks.
### Custom hooks merupakan Membuat Hooks kita sendiri , memungkinkan kita untuk menggunakan kembali logika stateful (seperti mengatur subscription dan mengingat nilai saat ini), tetapi setiap waktu Anda menggunakan hook kustom, semua state dan efek itu sepenuhnya terisolasi.