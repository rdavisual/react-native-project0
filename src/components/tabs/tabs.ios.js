import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  View,
  Text
} from 'react-native';

import DashboardView from '../dashboard/dashboardView';
import HeroesView from '../heroes/heroesView';

const iconGame1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEiUlEQVR4Xu2dobIVORCGfxwO3OIAh0TuI6zEooAnAMkjIOEJYNXalTwCEokDHDhwSCpUUXWAcyY9SXqSrv7G3qTT/fc3f+bcm3vmirhSK3AldfUULwBIDgEAAEByBZKXjwMAQHIFkpePAwBAcgWSl48DAEByBZKXjwMAQHIFkpePAwBAcgWSl48DAEByBZKXjwMAQHIFkpePAwBAcgWSl48DAEByBZKXjwMAQHIFkpePAwBAcgWSl48DAEByBZKXv4oDvJL0oNKL25I+BOnXLUnvK7n+K+nh7HoAwKcDALBTVxxgp2CjhuMAo5T8NQ4OsFNXHGCnYKOG4wCjlMQBupTEAbrka5+MA7RrtzWTZ4Cduj6V9E9lTvnMXIS9dH2T9Gbnuq3D/5Z0dWNy+X1FcbWt67WkZ60JjJq3igNY6imi3twY+LECiGUN65iVcrHmfHYcALTJBwBtunXNWkn0lXLpEhUHaJMPANp065q1kugr5dIlKg7QJh8AtOnWNWsl0VfKpUtUHKBNPgBo0+3irHuS7lZiPpF0bWPMV0nPB+d1KdyIXN5K+v+gfC8us4oDWP4WMFur0etzIuhEUQAYjZcxHg5gFMphGA6AA3Ao9CcDbAEOFmMJyRZgUclnDFsAWwBbAFuAj7uYox6xBZSTPuXEz9Z1R9JflTH3JX3aGHND0n/myvsGjsjls6R3lTTKiaFycsjtOgKAcpTr5YAKav8aZjmHNyCNHyGOyuWR4WhZV00A0CYfAOzQDQfYIdZvQ3GAE0GOuuss7ToqFwAAgOrxcguwF8fwDNAmHw6wQzeeAXaIxTPAZbGOuuss7Toql+WfAY787G1pTMYxNRg3Nel9BgCA+cgBwPweTM0AAKbKP39xAJjfg6kZAMBU+ecvDgDzezA1AwCYKv/8xZcHwHLwwXIgZL7UYzMYpcvyAFgOP3Iq+DxcFl0AYOyNeVi0UTcGABzWsrELAcCJnharGyv//GgAAADV/wuw3BhsAfNv5qYMcAAcAAf4yYDF6ppus4Un4QA7HeCFpC8LN/Q0teuSHldyBYCdAHQ97BwMjuWgDAAAAM8Ae54BcIDzNtalyxFnApewOraA8woAgA8ZPAOc6IoDnIdsCV1wABygS4EwVtdV5f7JYXTpdYDy4qTyAqWtq3ytS+2rUMqJoPIVL1tX+X7e8guWnsvyoibLC6xqOVheGjVKl/KirPLCrKarF4CmRRsn1b6h2xJ21L5bW+vIF1jVctn8OQD8Kc+Iv0sAQBeW5yfjAA6i4gA4gANWPiFxAAddcQAcwAErn5A4gIOuOAAO4IAVIcMoEMkBwogaKVEAiNQth1wBwEHUSCEBIFK3HHIFAAdRI4UEgEjdcsgVABxEjRQSACJ1yyFXAHAQNVJIAIjULYdcAcBB1EghASBStxxyBQAHUSOFBIBI3XLIFQAcRI0UEgAidcshVwBwEDVSSACI1C2HXAHAQdRIIQEgUrcccgUAB1EjhQSASN1yyBUAHESNFBIAInXLIVcAcBA1UkgAiNQth1wBwEHUSCEBIFK3HHL9DhV2TJDcJ9e6AAAAAElFTkSuQmCC';
const iconGame2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAESElEQVR4Xu2dwZEUMQxFtRmQAWRACEAkEAIZABlsCBAJEAIZQAZkAOWqPexhpmWvJfWf1euqPa1bLT/9/vZ43D13xtGawF3r3tN5QwDNRYAAEEBzAs27jwMggOYEmncfB0AAzQk07z4OgACaE2jefRwAATQn0Lz7OAACaE6gefdxAATQnEDz7uMACKA5gebdxwEQQHMCzbuPAyCA5gSadx8HQADNCTTvPg6AAJoTaN59HAABNCfQvPvP3QF+mNmbzRr/NLO3mzFkT0cAfmkQgM9ItgUO4JQGB/C1iwP4jGRb4AA4AJPAIw0wBPjmxRDgM5JtwRDwjIeAV2Y2/o6OezN7vSnPX2b20Ynx28zG380dtzwEfDazTyLEv5jZyOfmDgQQUzIEEMNxKQoOsITrcmMcIACimeEAMRyXouAAS7hwgABcV0PgAJl0r8TGAQKgMwcIgMgcIAbi4yhjgeeDE3Zs0tjd7BGV+VguHquOR8dXxcUiVQcYxf0eVR2ROO8mRFKeKgKoQ44AFljjAAuwdpriADv01s7FARZ44QALsHaa4gA79NbOxQEWeOEAC7B2muIAO/TWzsUBHvHyFk1eTOzk+WZmY3Hl6KjaETQWrd47uYydRX8nFrfWZLXZ+iwH+LeZ9zh95guYqj2BUd9LlNej/IIPhUcAl++A8nqUXxABHHpfeT3KL4gAEMAgwBDAELA9DWQSuI3QTvvtYBwAB9iWLw6wjfC2HSCg+3Ihyifl5RcM/BQgV72AhMrrUX5BBMDHwKiPgQE3nFyI8huy/II4AA6AA1zXQPkNWX5BHAAHwAFwAPcpmpnZ2Xh66KXTcGYThnetmc0pf4Ke+il/Je1ZQ4AHfeb/M5swIrZhzexPnFmVnOlTeRsE4CNHAD6jU1rgAAHYcQAfIg7gMzqlBQ4QgB0H8CHiAD6jU1rgAAHYcQAfIg7gMwpvMfOKmOEA3utZx4Mhu4srMzFmcuEVMQsyibrrlJ4MiliUWkA411R1CEAAc/XbboUAfIQzPxhRNSH1s11sgQB8YAjAZxTegiEgHOnlgDiADxoH8BmFt8ABwpHiAE9FigM8ldzBed4rYsYPMHmvfxku4S3yRCy+jFy9fL0FqYFivEbG+5Errz/hpThrDuA9HKp011UOR+X1KL/gg4QRgMiQjAB8U8UBfEbLLXAAHOBQNMwBlu+pp53AEOBzYwjwGS23YAhgCGAIuECg3JHLL7jsFZyQSgABpOLVD44A9GuUmiECSMWrHxwB6NcoNUMEkIpXPzgC0K9RaoYIIBWvfnAEoF+j1AwRQCpe/eAIQL9GqRkigFS8+sERgH6NUjNEAKl49YMjAP0apWaIAFLx6gdHAPo1Ss0QAaTi1Q+OAPRrlJohAkjFqx8cAejXKDVDBJCKVz84AtCvUWqGCCAVr35wBKBfo9QMEUAqXv3gCEC/RqkZIoBUvPrBEYB+jVIz/A+r8QmQ/6LOoAAAAABJRU5ErkJggg==';
const iconGame3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEOElEQVR4Xu2d4W0UQQxGnQ7oADqADoBKoAQ6ADqgBKgE6AA6gA7oADQiihLpEs9o/W2+Xb+T7lfmvPbzi29vsre5Ch6tCVy1rp7iAwGaS4AACNCcQPPymQAI0JxA8/KZAAjQnEDz8pkACNCcQPPymQAI0JxA8/KZAAjQnEDz8pkACNCcQPPymQAI0JxA8/KZAAjQnEDz8pkACNCcQPPymQAI0JxA8/KZAAjQnEDz8pkACNCcQPPyjzwBPkTEe5P+fYyIkc/hHghQ0zIEqOG4FIUJsITr8mImQAHEiGAC1HBcisIEWMLFBCjAdW8IJoCS7j2xmQAF0DkHKIDIOcBdiC8i4kkN1wejvI2INzscZ+YQXyLi88zCjWv+RMSPjTHuvFwxAb5FxMvKJIl1Q+B7RLyq5IEAlTT1sRBAz9j6CAhg3R59cgigZ2x9BASwbo8+OQTQM7Y+AgJYt0ef3KMLMD6DZp9DxwbNUz2Llkf4PbHhNPZhxnPqsboP4LT/PlVgw0VLf5hCgPMZggDn6+lSRQiwhOt8ixHgfD1dqggBlnCdbzECnK+nSxUhwBKu8y0+hQA/I+JdQW8+RcTzjXGccpkp5RQCVG15Vlyd5JQLAswQuLUGARJgrjuBTr91TrnM+M9bABNg/pvKTID8d4oJcIvRXn8NdILulEuu6+IXVZkAOVIEYAKkF8HkGv2/SGOPL8yc4iRwBihrLhNAgOZmIAACHP9jYPMebiqfCbAJ3/FfjADH7+GmChBgE77jvxgBjt/DTRVIBRjf+hlP9WPcYmbrhRwjx3Exx7itypaHUy4zdYxb1UzfrmZ1K3gmgYo14+tnXwsCvV75mtQ9x3PKpQDJ3RAIkCNFgJxR+Qon6E65lINmAuRIESBnVL7CCbpTLuWgmQA5UgTIGZWvcILulEs5aCZAjhQBckbLK7L/r/Ns4j7A41Kt6VuhLGe49oIhSXa1z7if8K8kbMZlLauJ1Y81Af5O5JYtmdnyrLgMa+aawKqLZXfvx+4HvO4qAlzWe/d+7H5ABHhwsO3ej90PiAAIMAjwFsBbQHaOl/6ck8AUUb6At4CcEZ8CckbLK3gLOOhbQNUVQRUbHmNTJdtYqfgHVjP/qGlsXI3n1kcFF+kVQYfd8NjamZ1ev9dkvCln9RwAAbQmIICWr310BLBvkTZBBNDytY+OAPYt0iaIAFq+9tERwL5F2gTtBdCWT/TdCazuA+yeIAfUEkAALV/76Ahg3yJtggig5WsfHQHsW6RNEAG0fO2jI4B9i7QJIoCWr310BLBvkTZBBNDytY+OAPYt0iaIAFq+9tERwL5F2gQRQMvXPjoC2LdImyACaPnaR0cA+xZpE0QALV/76Ahg3yJtggig5WsfHQHsW6RNEAG0fO2jI4B9i7QJIoCWr310BLBvkTZBBNDytY+OAPYt0iaIAFq+9tH/AW558IH76IrjAAAAAElFTkSuQmCC';

class Tabs extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedTab: 'Dashboard'
        };
    }

    render() {
        return(
            <TabBarIOS style={{backgroundColor: '#ffffff'}} >
                <TabBarIOS.Item
                    title="Dashboard"
                    selected={this.state.selectedTab === 'Dashboard'}
                    icon={{uri: iconGame1, scale:4 }}
                    onPress={() => {
                        this.setState({ selectedTab: 'Dashboard' });
                    }}
                    >
                    <DashboardView navigator={this.props.navigator} />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Heroes"
                    selected={this.state.selectedTab === 'Heroes'}
                    icon={{uri: iconGame2, scale:3 }}
                    onPress={() => {
                        this.setState({ selectedTab: 'Heroes' });
                    }}
                    >
                    <HeroesView />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Heroes"
                    selected={this.state.selectedTab === 'Heroes2'}
                    icon={{uri: iconGame3, scale:3 }}
                    onPress={() => {
                        this.setState({ selectedTab: 'Heroes2' });
                    }}
                    >

                    <View  style={{backgroundColor: 'rgba(0,0,0,.8)', flex: 1}}>
                        <Text style={{marginTop:50, textAlign: 'center', color: 'red' }}>ola</Text>
                    </View>
                    {/*<HeroesView />*/}
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

export default Tabs;
