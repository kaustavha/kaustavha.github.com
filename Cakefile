###
Cakefile I wrote -> 
The end goal is to allow writing all dependencies and task runner config in coffee, and resolve dependencies, run tasks and get a directory to a workable point with a single command instead of three.

This cakefile should allow .json dependency lists for bower and node to be written in coffee instead of plain js. 
Also gulpfile in coffee, but remember to add returns after every task to overcome coffescripts implicit returns
###
{spawn} = require 'child_process'
fs = require 'fs'

inDir = './tools'
outDir = './'

# Function to run spawnable cmdline commands
run = (spawnable, args=[], options={}, cb) ->
    options.stdio = 'inherit'
    cmd = spawn spawnable, args, options
    cmd.on 'exit', (res) ->
        if res is 0
            console.log 'Ran ' + spawnable + ' ' + args
            cb() if cb
        else
            process.exit(res)

#Function to fix .json packages
#[sarcasm] Hmm I wonder why more people don't try to write their dependency lists in coffee instead of json...
fixPkg = (dir, name, cb) ->
    console.log 'Fixing JSON packages'
    file = dir + name + '.json'
    fs.rename file + '.js', file, (err) ->
        return console.log err if err
        fs.readFile file, (err, data) ->
            return console.log err if err
            data = data.toString() # stringify buffer            
            pos = data.indexOf '\n' # position of end of first line which is 'generated by coffescript ver. no.', wtf?
            if pos isnt -1
                data = data.substr pos + 2 #extract desired string, pos + 2 is done to remove /n and (
                data = data.substr 0, data.length - 3 # remove ); at end
                fs.writeFile file, data, (err) ->
                    console.log err if err           
                    return cb() if cb
            else
                console.log 'Unexpected end or beginning of file' + file

# A wild triangle appears! 
task 'build', 'copy and transpile tool files, i.e gulp, bower & npm package, and run gulp', (options) ->
    run 'coffee', ['-b', '-o', outDir, '-c', inDir], {}, ->
        fixPkg outDir, 'bower', ->
            fixPkg outDir, 'package', ->
                run 'npm', ['install'], {uid: 0, cwd: outDir}, ->
                    run 'bower', ['install'], {uid: 1000, cwd: outDir}, ->
                        run 'gulp', ['default'], {cwd: outDir}, ->
                            console.log 'Done :)' 
