BABEL := ./node_modules/.bin/babel
BABEL_FLAGS := src -d dist --modules umd
KARMA := ./node_modules/.bin/karma

build:
	$(BABEL) $(BABEL_FLAGS)

watch:
	$(BABEL) $(BABEL_FLAGS) --watch

test:
	$(KARMA) start

.PHONY: build
