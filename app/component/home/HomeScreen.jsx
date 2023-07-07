import {PureComponent, Component, useState, useEffect} from 'react'
import {
    View,
    Dimensions,
    Image,
    Animated,
    ImageProps,
    ActivityIndicator,
    Text,
    Platform,
    TouchableOpacity,
    Alert
} from 'react-native'
import WaterfallFlow from 'react-native-waterfall-flow'
import {Navigation} from 'react-native-navigation'

const window = Dimensions.get('window')

const imageUrlList = [
    {
        id: '1',
        url: 'https://i.pinimg.com/736x/16/37/2f/16372f420fa7c55bd148dec972b27461.jpg',
    },
    {
        id: '2',
        url: 'https://i.pinimg.com/736x/37/34/db/3734dbd3be46645175fac40e1d0998fe.jpg',
    },
    {
        id: '3',
        url: 'https://i.pinimg.com/736x/39/09/6b/39096b30093a2c82e95d7520f7404443.jpg',
    },
    {
        id: '4',
        url: 'https://i.pinimg.com/736x/d5/30/94/d53094a552197ac91814f6b1540b5a36.jpg',
    },
    {
        id: '5',
        url: 'https://i.pinimg.com/736x/7f/7d/9a/7f7d9a16b29fc7e69966436251d788fe.jpg',
    },
    {
        id: '6',
        url: 'https://i.pinimg.com/736x/0e/60/e8/0e60e8d4beeeb6afd8f2ef17799edc4f.jpg',
    },
    {
        id: '7',
        url: 'https://i.pinimg.com/736x/7f/3d/ef/7f3def90175f8502b052f9ace6cf07ec.jpg',
    },
    {
        id: '8',
        url: 'https://i.pinimg.com/736x/b6/f2/5a/b6f25a66f4e5240b727ff436c52d083e.jpg',
    },
    {
        id: '9',
        url: 'https://i.pinimg.com/236x/d5/30/94/d53094a552197ac91814f6b1540b5a36.jpg',
    },
    // {id:'10', url:'https://v1.pinimg.com/videos/mc/hls/b5/c2/73/b5c273aab3b7a3b69be5fa49f440b4d5.m3u8'},
    {
        id: '10',
        url: 'https://i.pinimg.com/736x/02/ee/5e/02ee5e332ba7f6b4317114f570f967ee.jpg',
    },
    {
        id: '11',
        url: 'https://i.pinimg.com/736x/72/85/27/72852774bf9439af242447a2190117e4.jpg',
    },
    {
        id: '12',
        url: 'https://i.pinimg.com/736x/37/c3/28/37c32851c85add531a4e630dcdd69c80.jpg',
    },
    {
        id: '13',
        url: 'https://i.pinimg.com/736x/2f/49/f9/2f49f990f2e6945570ea2804fb1ab8af.jpg',
    },
    {
        id: '14',
        url: 'https://i.pinimg.com/736x/d7/33/78/d733788651371f1322823fe05195bf09.jpg',
    },
    {
        id: '15',
        url: 'https://i.pinimg.com/736x/f3/9a/50/f39a50facffbb156dc1a362400d98006.jpg',
    },
    {
        id: '16',
        url: 'https://i.pinimg.com/736x/63/90/39/63903933691d563707dc6ed16de70e15.jpg',
    },
    {
        id: '17',
        url: 'https://i.pinimg.com/736x/d7/9d/e3/d79de304ba791d468d8bcadc96f52ad1.jpg',
    },
    {
        id: '18',
        url: 'https://i.pinimg.com/736x/64/3a/78/643a786b03e762f3fd131682fe9e5cad.jpg',
    },
    {
        id: '19',
        url: 'https://i.pinimg.com/736x/4f/0f/ec/4f0fec411227f1f8eb8631ddf20d8545.jpg',
    },
    {
        id: '20',
        url: 'https://i.pinimg.com/736x/9c/84/cf/9c84cf4e5fb87092f7e2c8fb19b228d8.jpg',
    },
];

const getRandomImageUrlList = () => {
    let shuffledList = imageUrlList.sort(() => 0.5 - Math.random());
    return shuffledList.slice(0, 10);
};


export default class HomeScreen extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            refreshing: false
        }

        this.noMore = false
        this.inited = false
        this.page = 1
        this.pageSize = 10
        this.loading = false
    }

    componentDidMount() {

        this.loadData(1)

    }

    loadData = (page = 1, refreshing) => {
        if (this.loading) {
            return
        }
        this.loading = true
        if (refreshing) {
            this.setState({
                refreshing: true
            })
        }
        setTimeout(() => { // mock request data
            const newData = getRandomImageUrlList()
            //   const noMore = newData.length < this.pageSize
            const noMore = this.page === 10
            this.loading = false
            this.page = refreshing ? 1 : page
            this.noMore = noMore
            this.inited = true
            this.setState({
                data: refreshing ? newData : this.state.data.concat(newData),
                refreshing: false
            })
        }, 2000)
    }

    onEndReached = () => {
        if (!this.noMore) {
            this.loadData(this.page + 1)
        }
    }

    render() {
        return (
            <WaterfallFlow
                contentContainerStyle={{backgroundColor: '#f9f9f9'}}
                // ListHeaderComponent={<Header />}
                ListFooterComponent={<Footer noMore={this.noMore} inited={this.inited}
                                             isEmpty={this.state.data.length === 0}/>}
                ListEmptyComponent={<Empty inited={this.inited}/>}
                data={this.state.data}
                numColumns={2}
                initialNumToRender={10}
                onEndReached={this.onEndReached}
                refreshing={this.state.refreshing}
                onRefresh={() => this.loadData(1, true)}
                renderItem={({item, index, columnIndex}) => {
                    return (
                        <MyImage url={item.url} position={columnIndex} navigation={this.props.navigation}
                                 componentId={this.props.route.params.componentId}/>
                    )
                }}
            />
        )
    }
}
const windowWidth = Dimensions.get('window').width - 36;
const MyImage = ({url, position, navigation, componentId}) => {
    const [imageHeight, setImageHeight] = useState(0);
    let w = windowWidth / 2;
    useEffect(() => {
        Image.getSize(url, (width, height) => {
            let h = (w / width) * height;
            setImageHeight(h);
        });
    }, [url]);

    return (
        <TouchableOpacity
            // onPress={() => navigation.push('Detail', { url: url, width: w, height: imageHeight })}
            onPress={() => Navigation.push(componentId, {
                component: {
                    name: 'DetailScreen',
                    passProps: {
                        url: url, width: w, height: imageHeight
                    }
                }
            })}
            style={{
                flex: 1,
                paddingLeft: position === 0 ? 12 : 6,
                paddingRight: position === 0 ? 6 : 12,
                paddingTop: 12,
            }}>
            <Image
                source={{uri: url}}
                style={{width: w, height: imageHeight, borderRadius: 6}}
                resizeMode="cover"
            />
        </TouchableOpacity>
    );
};

class Footer extends PureComponent {
    render() {
        const {noMore, inited, isEmpty} = this.props
        if (!inited || isEmpty) {
            return null
        }
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60}}>
                {!noMore && <ActivityIndicator color="blue"/>}
                <Text style={{color: '#999', marginLeft: 8}}>{noMore ? '我是有底线的哦~' : '加载中...'}</Text>
            </View>
        )
    }
}

class Empty extends PureComponent {
    render() {
        const {inited} = this.props
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                {!inited && <ActivityIndicator color="blue"/>}
                <Text style={{color: '#999', marginLeft: 8}}>{inited ? '这里空空的哦~' : '获取数据中...'}</Text>
            </View>
        )
    }
}
