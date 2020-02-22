conv = convert -background none -resize 

all: dice7-512.png dice7-256.png dice7-144.png dice7-128.png favicon.ico dice7-backdrop.png
	@echo " ✓ converted files"

dice7-backdrop.png: dice7_logo.svg
	$(conv) 1024x1024 $< $@

dice7-512.png: dice7_logo_kontur.svg
	$(conv) 512x512 $< $@

dice7-256.png: dice7_logo_kontur.svg
	$(conv) 256x256 $< $@

dice7-144.png: dice7_logo_kontur.svg
	$(conv) 144x144 $< $@

dice7-128.png: dice7_logo_kontur.svg
	$(conv) 128x128 $< $@

favicon.ico: dice7_logo_kontur.svg
	$(conv) 128x128 $< $@
