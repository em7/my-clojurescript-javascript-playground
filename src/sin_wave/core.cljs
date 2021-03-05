(ns sin-wave.core
    (:require ))

(enable-console-print!)

(println "This text is printed from src/sin-wave/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn canvas []
    (.getElementById js/document "myCanvas"))

(defn ctx []
    (.getContext (canvas) "2d"))



(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
