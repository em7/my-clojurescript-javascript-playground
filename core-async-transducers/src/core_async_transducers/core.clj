(ns core-async-transducers.core
  (:require
    [clojure.core.async :refer [go chan map< filter< into >! <! go-loop close! pipe] :as async]))

;; creates a sequence for each "step"
(->> (range 10)
     (map inc)
     (filter even?)
     (prn "result is "))

;; creates a function which is a composition of others
(def xform (comp (map inc)
                 (filter even?)))

;; no immediate seq is created, `sequence` creates a lazy seq which is a result of application of the xform transducer
(->> (range 10)
     (sequence xform)
     (prn "result is "))

;; transducers in core.async

(def result (chan 10))

(def transformed
  (->> result
       (map< inc)                                           ; creates a new channel
       (filter< even?)                                      ; creates a new channel
       (into [])))

(go
  (prn "result is " (<! transformed)))

(go
  (doseq [n (range 10)]
    (>! result n))
  (close! result))

;; with transducers

(def result (chan 10))

(def xform
  (comp (map inc)
        (filter even?)))

(def transformed
  (->> (pipe result (chan 10 xform))                        ; no immediate channels will be created
       (into [])))

(go
  (prn "result is " (<! transformed)))

(go
  (doseq [n (range 10)]
    (>! result n))
  (close! result))
