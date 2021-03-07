(ns rx-playground.core
  (:require [rx.lang.clojure.core :as rx])
  (:import (rx Observable)
           (java.util.concurrent TimeUnit)))

(def  repl-out *out*)
(defn prn-to-repl [& args]
  (binding [*out* repl-out]
    (apply prn args)))

(rx/subscribe (->> (Observable/interval 1 TimeUnit/MILLISECONDS)
                   (rx/filter even?)
                   (rx/take 5)
                   (rx/reduce +))
              prn-to-repl)

(defn musicians []
  (rx/seq->o ["James Hetfield" "Dave Mustaine" "Kerry King"]))

(defn bands []
  (rx/seq->o ["Mettalica" "Megadeth" "Slayer"]))

(defn uppercased-obs []
  (rx/map #(.toUpperCase %) (bands)))

(-> (rx/map vector
            (musicians)
            (uppercased-obs))
    (rx/subscribe (fn [[musician band]]
                    (prn-to-repl (str musician " - from: " band)))))

(defn exceptional-obs []
  (rx/observable*
    (fn [observer]
      (rx/on-next observer (throw (Exception. "Oops. Something went wrong.")))
      (rx/on-completed observer))))

(rx/subscribe (->> (exceptional-obs)
                   (rx/map inc))
              (fn [v] (prn-to-repl "result is " v))
              (fn [v] (prn-to-repl "error is " v)))

(rx/subscribe (->> (exceptional-obs)
                   (rx/catch Exception e
                     (rx/return 10))
                   (rx/map inc))
              (fn [v] (prn-to-repl "result is " v)))

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))
