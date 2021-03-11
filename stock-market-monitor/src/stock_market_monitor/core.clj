(ns stock-market-monitor.core
  (:require [seesaw.core :refer :all]
            [rx.lang.clojure.core :as rx])
  (:import (java.util.concurrent ScheduledThreadPoolExecutor
                                 TimeUnit)
           (rx Observable)))

(native!)

(def main-frame (frame :title "Stock price monitor"
                       :width 200 :height 200
                       :on-close :exit))

(def price-label (label "Price: -"))

(def rolling-avg-label (label "Rolling average: -"))

(config! main-frame :content (border-panel
                               :north price-label
                               :center rolling-avg-label
                               :border 5))

(defn share-price [company-code]
  (Thread/sleep 200)
  (rand-int 1000))

(defn avg [numbers]
  (float (/ (reduce + numbers)
            (count numbers))))

(defn make-price-obs [company-code]
  (rx/return (share-price company-code)))

(defn -main [& args]
  (show! main-frame)
  (let [price-obs (-> (rx/flatmap (fn [_] (make-price-obs "XYZ"))
                                  (Observable/interval 500 TimeUnit/MILLISECONDS))
                      (.publish))
        sliding-buffer-obs (.buffer price-obs 5 1)]
    (rx/subscribe price-obs
                  #(text! price-label (str "Price: " %)))
    (rx/subscribe sliding-buffer-obs
                  #(text! rolling-avg-label (str "Rolling average: " (avg %))))
    (.connect price-obs)))
