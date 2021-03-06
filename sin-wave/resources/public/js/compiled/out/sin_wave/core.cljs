(ns sin-wave.core
  (:require))

(enable-console-print!)

(println "This text is printed from src/sin-wave/core.cljs. Go ahead and edit it and see reloading in action.")

;; RxJs definitions
(def rx-interval js/rxjs.interval)
(def rx-concat js/rxjs.concat)
(def rx-defer js/rxjs.defer)
(def rx-from-event js/rxjs.fromEvent)
(def rx-take-until js/rxjs.operators.takeUntil)
(def rx-take js/rxjs.operators.take)
(def rx-map js/rxjs.operators.map)
(def app-time (rx-interval 10))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn canvas []
  (.getElementById js/document "myCanvas"))

(defn ctx []
  (.getContext (canvas) "2d"))

(defn deg-to-rad [n]
  (* (/ Math/PI 180) n))

(defn sine-coord [x]
  (let [sin (Math/sin (deg-to-rad x))
        y (- 100 (* sin 90))]
    {:x   x
     :y   y
     :sin sin}))

(def sine-wave
  (.pipe app-time (rx-map sine-coord)))

(defn fill-rect [x y colour]
  (set! (.-fillStyle (ctx)) colour)
  (.fillRect (ctx) x y 2 2))

;;; Draw an alternating line
(def red  (.pipe app-time (rx-map (fn [_] "red"))))
(def blue (.pipe app-time (rx-map (fn [_] "blue"))))


(def mouse-click (rx-from-event (canvas) "click"))

(def cycle-colour
  (rx-concat (.pipe red (rx-take-until mouse-click))
             (rx-defer #(rx-concat (.pipe blue (rx-take-until mouse-click))
                                   cycle-colour))))

;;; Draw a line that reacts on click
(-> (js/rxjs.zip sine-wave cycle-colour)
    (.pipe (rx-take 700))
    (.subscribe (fn [[{:keys [x y]} colour]]
                  (fill-rect x y colour))))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
