import { Composition } from 'remotion';
import { OmnichannelFlow } from './OmnichannelFlow';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="OmnichannelFlow"
                component={OmnichannelFlow}
                durationInFrames={300} // 10 seconds @ 30fps
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};
