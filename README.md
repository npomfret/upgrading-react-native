# Upgrading-react-native

    git clone git@github.com:npomfret/upgrading-react-native.git

## Clean up

    brew update && brew upgrade
    npm cache clean && watchman watch-del-all
    rm -rf ~/.gradle/caches/*

## Unlink your xcode project

Close xcode, then run:

    node upgrading-react-native/unlink.js ./<path_to_my_rn_project>/package.json 
    sh unlink-packages.sh && rm unlink-packages.sh
    
## Then attempt the upgrade

    npm install -g react-native-git-upgrade
    react-native-git-upgrade

## Then resolve the conflicts in the xcode project file

todo!
    
... and finally re-link your dependencies

        react-native-link
        
And test
