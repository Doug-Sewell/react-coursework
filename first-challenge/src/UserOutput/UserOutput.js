import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <h3>{props.username}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam nec nulla eget commodo. Sed eleifend suscipit purus ac elementum. Nulla euismod urna eget ultrices dapibus. Ut placerat dolor sit amet eros pulvinar faucibus. Vivamus non augue dui. Aenean dictum fermentum mauris, vel dapibus ante dapibus sed. Aliquam tristique, sem in blandit euismod, ex sem placerat nibh, ac tristique orci dolor vel velit. Fusce arcu magna, interdum vel ornare at, hendrerit at lorem.</p>
            <p>Quisque ut semper arcu. Mauris orci est, ullamcorper sed turpis egestas, maximus rhoncus neque. Curabitur convallis, mauris facilisis ultricies luctus, lorem justo blandit magna, vitae mattis enim mi sed metus. Cras vehicula diam non venenatis pulvinar. Aliquam vehicula ligula metus, a dictum sapien iaculis vel. Aliquam non mattis erat. Ut vel consectetur nisl. Nunc rutrum lacus dui, eget vulputate risus venenatis pharetra. Ut at urna erat. Proin imperdiet urna eget nisi facilisis, ac aliquam leo consectetur. Sed lobortis, odio ut imperdiet posuere, dolor lectus consequat lorem, sed sollicitudin ligula sem id ante. Pellentesque consequat diam non turpis sodales sagittis. Pellentesque euismod sit amet nisi accumsan congue. </p>
        </div>
    )
}

export default UserOutput;