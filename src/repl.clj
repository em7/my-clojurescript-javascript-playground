(use 'figwheel-sidecar.repl-api)
(start-figwheel!) ;; <-- fetches configuration
(cljs-repl)

; IntellJ IDEA
;Click Run->Edit configurations.
;Click the + button at the top left and choose Clojure REPL
;Choose a Local REPL
;Enter a name in the Name field (e.g. "REPL")
;Choose the radio button Use clojure.main in normal JVM process
;In the Parameters field put src/repl.clj
;Click the OK button to save your REPL config.