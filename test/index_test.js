let assert = require('assert');

let classifier = require('../src/index.js');
describe("Positive Test Cases",()=>{
 
    it("should output 451 numbers",()=>{
        let params = {startNum: 50, endNum: 51, factor1: 3, factor2: 5, classification1: "Breakfast", classification2: "Lunch", combinedClassification: "Brunch"};
        let output = classifier.numericalClassifier(params);
        assert.equal(output,"Lunch Breakfast");
    });

    it("should print all numbers", () => {
        let params = {startNum: 50, endNum: 500, factor1: 3, factor2: 5, classification1: "Breakfast", classification2: "Lunch", combinedClassification: "Brunch"};
        assert.equal(classifier.numericalClassifier(params), "Lunch Breakfast 52 53 Breakfast Lunch 56 Breakfast 58 59 Brunch 61 62 Breakfast 64 Lunch Breakfast 67 68 Breakfast Lunch 71 Breakfast 73 74 Brunch 76 77 Breakfast 79 Lunch Breakfast 82 83 Breakfast Lunch 86 Breakfast 88 89 Brunch 91 92 Breakfast 94 Lunch Breakfast 97 98 Breakfast Lunch 101 Breakfast 103 104 Brunch 106 107 Breakfast 109 Lunch Breakfast 112 113 Breakfast Lunch 116 Breakfast 118 119 Brunch 121 122 Breakfast 124 Lunch Breakfast 127 128 Breakfast Lunch 131 Breakfast 133 134 Brunch 136 137 Breakfast 139 Lunch Breakfast 142 143 Breakfast Lunch 146 Breakfast 148 149 Brunch 151 152 Breakfast 154 Lunch Breakfast 157 158 Breakfast Lunch 161 Breakfast 163 164 Brunch 166 167 Breakfast 169 Lunch Breakfast 172 173 Breakfast Lunch 176 Breakfast 178 179 Brunch 181 182 Breakfast 184 Lunch Breakfast 187 188 Breakfast Lunch 191 Breakfast 193 194 Brunch 196 197 Breakfast 199 Lunch Breakfast 202 203 Breakfast Lunch 206 Breakfast 208 209 Brunch 211 212 Breakfast 214 Lunch Breakfast 217 218 Breakfast Lunch 221 Breakfast 223 224 Brunch 226 227 Breakfast 229 Lunch Breakfast 232 233 Breakfast Lunch 236 Breakfast 238 239 Brunch 241 242 Breakfast 244 Lunch Breakfast 247 248 Breakfast Lunch 251 Breakfast 253 254 Brunch 256 257 Breakfast 259 Lunch Breakfast 262 263 Breakfast Lunch 266 Breakfast 268 269 Brunch 271 272 Breakfast 274 Lunch Breakfast 277 278 Breakfast Lunch 281 Breakfast 283 284 Brunch 286 287 Breakfast 289 Lunch Breakfast 292 293 Breakfast Lunch 296 Breakfast 298 299 Brunch 301 302 Breakfast 304 Lunch Breakfast 307 308 Breakfast Lunch 311 Breakfast 313 314 Brunch 316 317 Breakfast 319 Lunch Breakfast 322 323 Breakfast Lunch 326 Breakfast 328 329 Brunch 331 332 Breakfast 334 Lunch Breakfast 337 338 Breakfast Lunch 341 Breakfast 343 344 Brunch 346 347 Breakfast 349 Lunch Breakfast 352 353 Breakfast Lunch 356 Breakfast 358 359 Brunch 361 362 Breakfast 364 Lunch Breakfast 367 368 Breakfast Lunch 371 Breakfast 373 374 Brunch 376 377 Breakfast 379 Lunch Breakfast 382 383 Breakfast Lunch 386 Breakfast 388 389 Brunch 391 392 Breakfast 394 Lunch Breakfast 397 398 Breakfast Lunch 401 Breakfast 403 404 Brunch 406 407 Breakfast 409 Lunch Breakfast 412 413 Breakfast Lunch 416 Breakfast 418 419 Brunch 421 422 Breakfast 424 Lunch Breakfast 427 428 Breakfast Lunch 431 Breakfast 433 434 Brunch 436 437 Breakfast 439 Lunch Breakfast 442 443 Breakfast Lunch 446 Breakfast 448 449 Brunch 451 452 Breakfast 454 Lunch Breakfast 457 458 Breakfast Lunch 461 Breakfast 463 464 Brunch 466 467 Breakfast 469 Lunch Breakfast 472 473 Breakfast Lunch 476 Breakfast 478 479 Brunch 481 482 Breakfast 484 Lunch Breakfast 487 488 Breakfast Lunch 491 Breakfast 493 494 Brunch 496 497 Breakfast 499 Lunch");
    })
});

describe("Negative Test Cases", ()=>{
    it("should throw a graceful error when startNum is not defined",()=>{
        let params = {endNum: 500, factor1: 3, factor2: 5, classification1: "Breakfast", classification2: "Lunch", combinedClassification: "Brunch"}
        assert.throws(() => classifier.readAndValidateInput(params),Error, "startNum is not defined");
    });

    it("should throw a graceful error when endNum is not defined",()=>{
        let params = {startNum: 50, factor1: 3, factor2: 5, classification1: "Breakfast", classification2: "Lunch", combinedClassification: "Brunch"}
        assert.throws(()=> classifier.readAndValidateInput(params),Error, "endNum is not defined");
    });

    it("should throw a graceful error when factor1 is zero", ()=>{
        let params = {startNum: 50, endNum: 500, factor1: 0, factor2: 5, classification1: "Breakfast", classification2: "Lunch", combinedClassification: "Brunch"};
        assert.throws(()=> classifier.readAndValidateInput(params), Error, "Factors cant be zero as the operation can result in a division by zero");
    });

    it("should throw a graceful error when factor2 is zero", ()=> {
        let params = {startNum: 50, endNum: 500, factor1: 3, factor2: 0, classification1: "Breakfast", classification2: "Lunch", combinedClassification: "Brunch"};
        assert.throws(()=> classifier.readAndValidateInput(params), Error, "Factors cant be zero as the operation can result in a division by zero");
    })

});